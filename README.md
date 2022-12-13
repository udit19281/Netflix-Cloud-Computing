Features:
 1. User log in
 2. New user sign up
 3. Change Password
 4. Search Video
 5. Play Video
 6. Request Video Recommendations
 

TODO : 1.UI  2. Db failover
Scalability:
With servers performing specialized tasks, both the servers will never be overwhelmed
with requests. Hence the system can handle a large number of requests and adapt to a
growing user base.
Secondly, for a lot of clients, the master worker is equipped with concurrent handling of clients.
React can handle multiple clients.

Availability:
Since searching and video streaming is computationally expensive, a dedicate server caters to these tasks. Also, user authentication tasks are less computatinally expensive but more in number, hence another server is dediated for these tasks.
Databases of both the servers store the same data at all times . Databases are write synchronised

Fail-over/Migration:
If one of the databases fails, the system will exclusively use the second one.They are write synchronised.
