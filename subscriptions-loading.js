// subscriptions-loading.meteor.com

MESSAGES = new Mongo.Collection('messages');

if (Meteor.isServer) {

    Meteor.publish("messages", function() {
        Meteor._sleepForMs(3000); // 3 sec simulation...
        return MESSAGES.find({});
    });
}

Router.configure({
    layoutTemplate: 'defaultLayout',
    //loadingTemplate: 'loadingTemplate'
});

Router.plugin('loading', {
    loadingTemplate: 'loadingTemplate'
});

Router.route('/', {
    template: 'home'
});

Router.route('/messages', {
    subscriptions: function() {
        return Meteor.subscribe('messages');
    },
});
