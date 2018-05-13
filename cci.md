# Arrays

# Strings

# HashTables
  - Data structure that maps keys to values (key, value)
  - Compute a hash for the key, assign an index in an array? for that key
  - Could have collisions (same hash for different keys), linked list approach
  - Usual implementation O(1)
  - When collisions are high we can have O(n), in the linked list

# Array list (resizable)
  - An array that resizes itself while providing O(1) access
  - Each time it needs to be resized, it doubles in size, and takes O(n) time, amort. insertion still O(1)
  - Amortized insertion time: Average time taken when the operation is repeated several times
  ie: We do an operation million times, but our cost of accessing is O(1), even if it rarely takes O(n),
  that cost is diluted between O(1) operations. So, in amortized time (average) is O(1)

# String Builder
  - Every time a string concatenation is done, a new allocation of a string is made
  - Characters are copied over again an again
  - String builder implements a resizable array, an a string is produce only when necessary

# Linked lists
  - Data structure that represents a sequence of nodes
  - It can be singly or doubly (each node points to next and previous)
  - Searching is O(n)
  - Adding to head or tail is O(1)
  - Reminder: 1) check for null pointer when iterating 2) Update head and tail accordingly
  - Runner technique, 2 pointers running simultaneously (one ahead of the other)
  - Usually easier to use recursion to solve this kind of problems







