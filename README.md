# Profile-Server-Tic-Tac-Toe
Profile server for online matchmaking of tic tac toe hybrid.




APIs present:

    **/signup - POST** :
    input:
    {
    "userName": "Some_User",
    "emailId": "some@user.com",
    "profilePictureURL": "pfpURL",
    "password": "somePass"
    }
    output:
    SignUp Successful
    
    **/signin- POST** :
    input:
    {
    "userName": "Some_User",
    "password": "somePass"
    }
    output:
    {
    "userName":"Some_User",
    "emailId":"some@user.com",
    "profilePictureURL":"pfpURL"
    }
    
    **/getmatchhistory- GET** :
    input: N/A
    output:
    {
    "matchHistory":[
    {"opponentName":"Some_User","result":"won","_id":"623b29cd8eacc81bc4b95edd"},
    {"opponentName":"Some_User","result":"lost","_id":"623b29cd8eacc81bc4b95ede"},
    {"opponentName":"Some_User","result":"draw","_id":"623b29cd8eacc81bc4b95edf"}
    ]
    }
    
    **/setmatchhistory- PUT** :
    input:
    {
    "matchHistory" : [
    {
    "opponentName": "Some_User",
    "result": "won"
    },
    {
    "opponentName": "Some_User",
    "result": "lost"
    },
    {
    "opponentName": "Some_User",
    "result": "draw"
    }
    ]
    }
    output:
    Updated Successfully
