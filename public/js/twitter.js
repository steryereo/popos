/*
 * tweetable 1.7.0 - jQuery twitter feed plugin
 *
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * With modifications from Philipp Robbel (http://www.robbel.com/) and Patrick DW (stackoverflow)
 * for IE compatibility.
 *
 * Revision: $Id: jquery.tweetable.js 2012-07-08 $ 
 *
 */
(function($) {

	jQuery.fn.tweetable = function (opts) {
		opts = $.extend({}, $.fn.tweetable.options, opts);

		// Loop through each instance
		return this.each(function () {

			var act = jQuery(this)
			,   tweetList = jQuery('<ul class="tweetList">')[opts.position.toLowerCase() + 'To'](act)
			,   shortMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
			,   api = "https://api.twitter.com/1/statuses/user_timeline.json?include_entities=false&suppress_response_codes=true&screen_name="
			,   count = "&count="
			,   replies = "&exclude_replies="
			,   rts = "&include_rts="
			,   twitterError
			,   tweetMonth
			,   tweetMonthInt
			,   iterate
			,   element;

			// Fire JSON request to twitter API
			jQuery.getJSON(api + opts.username + count + (opts.limit + 5) + replies + opts.replies + rts + opts.retweets + "&callback=?", act, function (data) {

				// Check for response error 
				twitterError = data && data.error || null;

				if(twitterError)
				{
					tweetList.append('<li class="tweet_content"><p class="tweet_link">'+ opts.failed +'</p></li>');
					return;
				}

				// Loop through twitter API response
				jQuery.each(data, function (i, tweet) {

					// Output tweets if less than limit
					if(i >= opts.limit)
						return;

					tweetList.append('<li class="tweet_content_' + i + '"><p class="tweet_link_' + i + '">' + tweet.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + '</p></li>');
					
					// Display the time of tweet if required
					if (opts.time === true) {
						for(iterate=0; iterate<=12; iterate++) {
							if(shortMonths[iterate] === tweet.created_at.substr(4, 3)) {
								tweetMonthInt = iterate + 1;
								tweetMonth = (tweetMonthInt < 10) ? '0' + tweetMonthInt : tweetMonthInt ;
							}
						}
						// Create ISO 8601 formatted date
						var iso8601 = tweet.created_at.substr(26,4) + '-' + tweetMonth + '-' + tweet.created_at.substr(8, 2) + 'T' + tweet.created_at.substr(11,8) + 'Z';  
						jQuery('.tweet_link_' + i).append('<p class="timestamp"><'
							+ ((opts.html5) ? 'time datetime="' + iso8601 + '"' : 'small') 
							+ '> ' + tweet.created_at.substr(8, 2) + '/' + tweetMonth + '/' + tweet.created_at.substr(26,4) + ', ' + tweet.created_at.substr(11,5) + '</' 
							+ ((opts.html5) ? 'time' : 'small') + 
							'></p>');
					}
				});

				// Display one tweet and retweet
				if ( opts.rotate === true ) {

					var listItem = tweetList.find('li')
					,   listLength = listItem.length || null
					,   current = 0
					,   timeout = opts.speed;	

					if(!listLength)
						return

					// Rotate the tweets one at a time
					function rotateTweets() {
					   listItem.eq(current++).fadeOut(400, function(){
							current = (current === listLength) ? 0 : current;
							listItem.eq(current).fadeIn(400);
					   });
					}
					//Hide all but the first tweet
					listItem.slice(1).hide();

					//Rotate tweets at specified interval
					setInterval(rotateTweets, timeout);
				}		
				opts.onComplete(tweetList);
			});
		});
	};

})(jQuery);

/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.0.2
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator || "";
      if ($l.wordSeparator === undefined) { separator = " "; }
      return $.trim([prefix, words, suffix].join(separator));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}));


// Twitter function
$(function(){
		$('#twitter').tweetable({
		username: 'envato', 
		time: false,
		rotate: true,
		speed: 4000, 
		limit: 3,
		replies: false,
		position: 'append',
		failed: "Sorry, twitter is currently unavailable for this user.",
		html5: true,
		onComplete:function($ul){
			$('time').timeago();
		}
		});
});

