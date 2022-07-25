# Hashtables: Implementation
`HashTables` are a data Structure that uses key value pairs. This means every Node or Bucket has both a key, and a value. A Hash is the ability to encode the key that will eventually map to a specific location in the data structure that we look at to retrieve the value. The benefits of a HashTable is being able to instead needing to iterating through an entire array looking for specific data we can just fast access the information. 

## Challenge
- set
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
- get
  - Arguments: key
  - Returns: Value associated with that key in the table
- contains
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- keys
  - Returns: Collection of keys
- hash
  - Arguments: key
  - Returns: Index in the collection for that key
