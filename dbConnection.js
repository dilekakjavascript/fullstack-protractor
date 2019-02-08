var dbConnection = function(){
   
    this.host       = 'room-reservation-qa5.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com';
    this.port       = 5432;
    this.database   = 'room_reservation_qa5';
    this.user       = 'qa_user';
    this.password   =  'Cybertek11!';
   
}

module.exports = new dbConnection();