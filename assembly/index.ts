import {Context,PersistentVector} from "near-sdk-as";
import { Writing } from "./models";
@nearBindgen
export class Contract{
  writingList:PersistentVector<Writing>=new PersistentVector<Writing>("w");
  // writeSomthing
  @mutateState()
  writeSomthing(message:string , toWho:string):Writing{
    let sender:string=Context.sender;
    let writing:Writing=new Writing(message,sender,toWho);
    this.writingList.push(writing);
    return writing;
  }
  //listWriting
  listWriting_1():PersistentVector<Writing>{
    return this.writingList;
  }
  listWriting():Array<Writing>{
    let writings=new Array<Writing>(this.writingList.length);
    for(let i=0;i<this.writingList.length;i++){
      writings[i]=this.writingList[i];
    }
    return writings;    
  }
  
}