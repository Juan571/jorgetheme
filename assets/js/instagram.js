var userFeed = new Instafeed({
   get: 'user',
   userId: '454385672', // chage with your userID
   accessToken: '454385672.1677ed0.770c6f506b8242388d4971986b753b8c', // change with your accessToken
   resolution: 'standard_resolution',
   sortBy: 'most-recent',
   limit: 9,
   links: true
 });
 userFeed.run();
