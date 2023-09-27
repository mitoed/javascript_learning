function helloWorld() {
  console.log('Hello World')
}

//helloWorld()

// What if I were to code the patt in js?
// Create classes for the pictures and captions that will be displayed in the classroom.
// These will be used to create and object for each picture loaded into the program.
class PersonPicture {
  constructor(ID, firstName, lastName, role, imgDir){
    this._id = ID
    this._firstName = firstName
    this._lastName = lastName
    this._firstPrefer = firstName
    this._role = role
    this._imgDir = imgDir
  }
  get ID(){
    return this._id
  }
  set ID(newID){
    this._id = newID
  }
  get firstName(){
    return this._firstName
  }
  set firstName(newFirstName){
    this._firstName = newFirstName
  }
  get lastName(){
    return this._lastName
  }
  set lastName(newLastName){
    this._lastName = newLastName
  }
  get firstPrefer(){
    return this._firstPrefer
  }
  set firstPrefer(newFirstPrefer){
    this._firstPrefer = newFirstPrefer
  }
  get role(){
    return this._role
  }
  get imgDir(){
    return this._imgDir
  }
  set imgDir(newimgDir){
    this._imgDir = newimgDir
  }

}

class Professor extends PersonPicture {
  constructor(ID, firstName, lastName, officeHours, officeRoom, imgDir){
    super(ID, firstName, lastName, firstName, 'Professor', imgDir)
    this._officeHours = officeHours
    this._officeRoom = officeRoom
  }
  get officeHours(){
    return this._officeHours
  }
  set officeHours(newOfficeHours){
    this._officeHours = newOfficeHours
  }
  get officeRoom(){
    return this._officeRoom
  }
  set officeRoom(newOfficeRoom){
    this._officeRoom = newOfficeRoom
  }
}

class Student extends PersonPicture {
  constructor(ID, firstName, lastName, groupID, groupPosition, imgDir){
    super(ID, firstName, lastName, firstName, 'Student', imgDir)
    this._groupID = groupID
    this._groupPosition = groupPosition
  }
  get groupID(){
    return this._groupID
  }
  set groupID(newGroupID){
    this._groupID = newGroupID
  }
  get groupPosition(){
    return this._groupPosition
  }
  set groupPosition(newGroupPosition){
    this._groupPosition = newGroupPosition
  }
}

const davidWood = new Professor("000000", 'David', 'Wood', 'MW 11a-1p', 'TNRB 534', '/images/d_wood')
davidWood.firstPrefer = 'Prof. David'
console.log(davidWood.firstPrefer)
