//Create a MongoDB Collection
PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {

   Template.leaderboard.helpers({
      player: function () {
         return PlayersList.find();
      },
      selectedClass: function () {
         var playerId = this._id;
         var selectedPlayer = Session.get('selectedPlayer');
         if (selectedPlayer === playerId) {
            return 'selected'
         }

      }
   })

   Template.leaderboard.events({
      'click li.player': function () {
         var playerId = this._id;
         Session.set('selectedPlayer', playerId);
         var selectedPlayer = Session.get('selectedPlayer');
         console.log(selectedPlayer);
      }
   });


}


//the code in this section runs only on the server
if (Meteor.isServer) {

}