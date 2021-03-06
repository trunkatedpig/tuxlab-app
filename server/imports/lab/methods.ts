declare var Collections : any;
var LabSession = require('../api/lab.session.js');
declare var TuxLog : any;
declare var SessionCache : any;
declare var nconf : any;
var LabSession = require('../api/lab.session.js');

Meteor.methods({
  /**prepareLab: prepares a labExec object for the current user
   * takes the id of the lab and a callback as parameter
   * callback: (err,pass)
   * implement loading wheel, md fetch, course record create in callback
   */
  'prepareLab': function(user : string, labId : string){
     var session = new LabSession();
     var uId = Meteor.user().profile.nickname;
     var sessionAsync = Meteor.wrapAsync(session.init,session);
     try{
       var sshPass = sessionAsync(uId,labId);
       var sshInfo = {host: nconf.get("domain_root"), pass: sshPass}
       return sshInfo;
     }
     catch(e){
       TuxLog.log("warn",new Meteor.Error(e));
       throw new Meteor.Error(e);
     }
  },
  'nextTask': function(labId : string){
    /**session.next(cb)
     * cb(err,res) implement loading wheel here
     * call nextTask callback(err,res) in cb
     * change task markdown -frontend
     * change course records if passed
     */
    var uId = Meteor.userId();
    SessionCache.get(uId,labId,function(err,res){
      if(err){
        TuxLog.log("warn",err);
	throw new Meteor.Error("Internal Service Error");
      }
      else if(!res){
        TuxLog.log("warn",new Meteor.Error("SessionCache.get failed to return a session instance"));
	throw new Meteor.Error("Internal Service Error");
      }
      else{
          var nextAsync = Meteor.wrapAsync(res.next,res);
	try{
	  var result = nextAsync();
	  return "success"; //TODO: @Derek what to return here?
	}
	catch(e){
	  TuxLog.log("warn",e);
	  throw new Meteor.Error("Internal Service Error");
	}
      }
    });
  },
  'endLab': function(labId : string){
    /**session.end(cb)
     * cb(err,res)
     * call endLab callback(err,res) in cb
     * change course records
     * session.env.deleteRecords deletes etcd records,
     * session.env.removeVm removes virtual machines.
     * remove all vms and deleterecords after lab is completed for good. -highly optional
     */
    var uId = Meteor.userId();
    SessionCache.get(uId,labId,function(err,res){
      if(err){
        TuxLog.log("warn",err);
	throw new Meteor.Error("Internal Service Error");
      }
      else if(!res){
        TuxLog.log("warn",new Meteor.Error("SessionCache.get failed to return a session instance"));
	throw new Meteor.Error("Internal Service Error");
      }
      else{
        var endAsync = Meteor.wrapAsync(res.end,res);
	try{
	  var result = endAsync();
	  return "success" //TODO: @Derek what to return here?
	}
	catch(e){
	  TuxLog.log("warn",e);
	  throw new Meteor.Error("Internal Service Error");
	}
      }
    });
  }
});
