```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("651d56465324567890abcdef")}, {"$inc": {"count": 1}});
```