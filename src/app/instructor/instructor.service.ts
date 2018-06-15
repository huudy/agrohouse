import { Injectable } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { Instructor } from './instructor.model';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InstructorService {

  url = "http://localhost:3000";

  constructor(private http:Http) {

   }
   private instructors: Instructor[]=[];

   getInstructors(){
    return this.http.get(this.url+'/instructors')
    .map((instructors)=>{
      let transformedInst: Instructor[]=[];
      for (let inst of instructors.json()){
        console.log(inst.img)
        transformedInst.push(new Instructor(inst._id, inst.name, inst.age, inst.img, inst.desc))
      } 
      return transformedInst;
    }).catch((error:Response)=>{      
      console.log('Error: '+error)
      return Observable.throw(error.json());
      
    })
   }

 
   findById(id){
    return this.http.get(this.url+'/room/'+id)
    .map((response)=>{
        var res = JSON.parse(response.json());
        console.log(res);
        var instructor = new Instructor(res._id.$oid, res.name, res.age, res.img,res.desc, res.reserved);
        console.log(instructor);
        return instructor;
    })
    .catch((error:Response)=>{
        return Observable.throw(error.json())
    }); 
}

}
