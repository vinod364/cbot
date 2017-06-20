"use strict";
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});
class Chat_connection_manager {
    read(cb) {
        con.query("SELECT * FROM CHATS", function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = Chat_connection_manager;