import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
  providedIn: 'root'}
)
export class JarwisService {

  // private baseUrl = 'https://sce-ogun.sabiogun.jtcheck.com/backend/public/api';

   private baseUrl = 'http://localhost/sce-platform/backend/public/api';

  constructor(private http: HttpClient) { }
  roleuser() {
    return this.http.get(`${this.baseUrl}/roleuser`)
  }
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  updatecontent(data) {
    return this.http.post(`${this.baseUrl}/updatecontent`, data)
  }
  
  role(data) {
    return this.http.post(`${this.baseUrl}/role`, data)
  }
  activity(data) {
    return this.http.post(`${this.baseUrl}/activity`, data)
  }
  cate(data) {
    return this.http.post(`${this.baseUrl}/cate`, data)
  }
  
  content(data) {
    return this.http.post(`${this.baseUrl}/content`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
  name_t(data) {
    return this.http.post(`${this.baseUrl}/name_t`, data)
  }
  
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  getact() {
    return this.http.get(`${this.baseUrl}/getact`,)
  }
  getArticle() {
    return this.http.get(`${this.baseUrl}/getArticle`,)
  }
  profile() {
    return this.http.get(`${this.baseUrl}/me`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  updateprofile(data) {
    return this.http.post(`${this.baseUrl}/me`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  post(id:string) {

    return this.http.get(`${this.baseUrl}/post/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  displayevent() {
    return this.http.get(`${this.baseUrl}/displayevent`,)
  }
  displayartifact() {
    return this.http.get(`${this.baseUrl}/displayartifact`,)
  }
  displaybusiness() {
    return this.http.get(`${this.baseUrl}/displaybusiness`,)
  }
  displaypeople() {
    return this.http.get(`${this.baseUrl}/displaypeople`,)
  }
  displaytourist() {
    return this.http.get(`${this.baseUrl}/displaytourist`,)
  }
  displaynews() {
    return this.http.get(`${this.baseUrl}/displaynews`,)
  }
  
  displayactbytitle() {
    return this.http.get<any>(`${this.baseUrl}/displayactbytitle`,)
  }
  
  updateView(data) {
    return this.http.post<any>(`${this.baseUrl}/addview`, data)
  }
  getcontent(id:string) {
    return this.http.get(`${this.baseUrl}/getcontent/${id}`)
  }
  getcontentonly(id:string) {
    return this.http.get(`${this.baseUrl}/getcontentonly/${id}`)
  }
  getalltitle() {
    return this.http.get(`${this.baseUrl}/getalltitle`,)
  }
  getfootertitle() {
    return this.http.get(`${this.baseUrl}/getfootertitle`,)
  }
  gettitles(id:string) {
    return this.http.get(`${this.baseUrl}/gettitles/${id}`)
  }
  getUtitles() {
    return this.http.get(`${this.baseUrl}/getUtitles`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getUcontent() {
    return this.http.get(`${this.baseUrl}/getUcontent`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
//  search(searchTerm:string) {
//     return this.http.get(`${this.baseUrl}/getalltitle/${searchTerm}`)
//   }

comment(data) {
  return this.http.post(`${this.baseUrl}/comment`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

}
