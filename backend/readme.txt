db.createCollection('libraries');
db.createCollection('groups');
db.createCollection('messages');
db.createCollection('contacts');

db.libraries.insert([
    {'name':'Birthday'}
])