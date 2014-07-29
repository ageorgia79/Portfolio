var sliderVidToTop, sliderVidTopPos = 0;    
var sliderVidAdDiv, sliderDivTimer;
                        
////////////////////////////////////////////////////////////////
// UTILS - Start
////////////////////////////////////////////////////////////////                            
function mrl_createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function mrl_readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function mrl_getUrlVars(url)
{
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
////////////////////////////////////////////////////////////////
// UTILS - End
////////////////////////////////////////////////////////////////                            

function mrl_adDoneEvent_yt()
{
        var players = document.getElementsByClassName('html5-main-video');
        console.log('mntz - Found ' + players.length + ' players');
        var pl = players[0];
        console.log('mntz - Video Resume');
        pl.play();    
}
function mrl_adDoneEvent()
{
    console.log('mrl_adDoneEvent');
    sliderVidAdDiv.parentElement.removeChild(sliderVidAdDiv);
}
function mrl_on_AdStart()
{
    console.log('mrl_on_AdStart');
    mrl_createCookie('slider_div',1,1);    
    sliderDivTimer = setInterval(function(){
        if (sliderVidTopPos > sliderVidToTop)
        {
            sliderVidTopPos--;
            sliderVidAdDiv.style.top = sliderVidTopPos + 'px';
        }
        else
        {
            clearInterval(sliderDivTimer);
        }
    },1);                                    
}

(function(){     
    var _webmap = {
         //'youtube.com':[preroll],
         'wattpad.com':[slider_vid],                  
         'as.com':[slider_vid],                  
         'homeandgardenprojects.com':[slider_vid],                  
         'zillow.com':[slider_vid],                  
         'trutv.com':[slider_vid],                   
         'thekaraokechannel.com':[slider_vid],                   
         'theaa.com':[slider_vid],                   
         'mtubez.com':[slider_vid],                  
         'msg.com':[slider_vid],                     
         'grooveshark.com':[slider_vid],                     
         'mirror.co.uk':[slider_vid],                    
         'meeboo.net':[slider_vid],                  
         'drugsnews.co.uk':[slider_vid],                     
         'fashionboutiqe.co.uk':[slider_vid],                    
         'foxnews.com':[slider_vid],                     
         'comcast.net':[slider_vid],                     
         'gostcars.com':[slider_vid],                    
         'coolestgamesonline.com':[slider_vid],                  
         'stocktradingcenters.com':[slider_vid],                     
         'ticklishsports.co.uk':[slider_vid],                    
         'newfreshtips.fr':[slider_vid],                     
         'breakfastdailynews.fr':[slider_vid],                   
         'funnyvinevideos.com':[slider_vid],                     
         'valuewalk.com':[slider_vid],                   
         'parentsite.net':[slider_vid],                  
         'moneycontrol.com':[slider_vid],                    
         'covers.com':[slider_vid],                  
         'viewster.com':[slider_vid],                    
         'killsometime.com':[slider_vid],                    
         'idiotproofrecipes.com':[slider_vid],                   
         'firstpost.com':[slider_vid],                   
         'empireonline.com':[slider_vid],                    
         'affhealth.co.uk':[slider_vid],                     
         'businessinsider.com':[slider_vid],                     
         'josoline.com':[slider_vid],                    
         'belfasttelegraph.co.uk':[slider_vid],                  
         'latimes.com':[slider_vid],                     
         'cracked.com':[slider_vid],                     
         'ehow.com':[slider_vid],                    
         'w1mobile.com':[slider_vid],                    
         'lolnexus.com':[slider_vid],                    
         'guitar.com':[slider_vid],                  
         'blinkx.com':[slider_vid],                  
         'chron.com':[slider_vid],                   
         'bostonherald.com':[slider_vid],                    
         'bada.tv':[slider_vid],                     
         'kijiji.ca':[slider_vid],                   
         'tomahawknation.com':[slider_vid],                  
         'soccerfame.com':[slider_vid],                  
         'screwattack.com':[slider_vid],                     
         'dressupallgirls.com':[slider_vid],                     
         'local.com':[slider_vid],                   
         'ibtimes.com.au':[slider_vid],                  
         'curse.com':[slider_vid],                   
         'company.co.uk':[slider_vid],                   
         'celebbabylaundry.com':[slider_vid],                    
         'aplus.com':[slider_vid],                   
         'eluniversal.com':[slider_vid],                     
         'cheapoair.com':[slider_vid],                   
         'quiltingboard.com':[slider_vid],                   
         'inquirer.net':[slider_vid],                    
         'givemesport.com':[slider_vid],                     
         'woodtv.com':[slider_vid],                  
         'nbcsports.com':[slider_vid],                   
         'theboxhouston.com':[slider_vid],                   
         'hockeybuzz.com':[slider_vid],                  
         'videobash.com':[slider_vid],                   
         'shape.com':[slider_vid],                   
         'newindianexpress.com':[slider_vid],                    
         'noobgamer.co.uk':[slider_vid],                     
         'designntrend.com':[slider_vid],                    
         'elouai.com':[slider_vid],                  
         'fandango.com':[slider_vid],                    
         'newgrounds.com':[slider_vid],                  
         'fox4kc.com':[slider_vid],                  
         'ghananation.com':[slider_vid],                     
         'prepperchimp.com':[slider_vid],                    
         'enstarz.com':[slider_vid],                     
         'theweek.com':[slider_vid],                     
         'programming4.us':[slider_vid],                     
         'abc.go.com':[slider_vid],                  
         'phonearena.com':[slider_vid],                  
         'idigitaltimes.com':[slider_vid],                   
         'channel3000.com':[slider_vid],                     
         'gtdaily.com':[slider_vid],                     
         'mstarz.com':[slider_vid],                  
         'latinpost.com':[slider_vid],                   
         'balls.ie':[slider_vid],                    
         'zoopla.co.uk':[slider_vid],                    
         'agame.com':[slider_vid],                   
         'kdramastars.com':[slider_vid],                     
         'snopes.com':[slider_vid],                  
         'comingsoon.net':[slider_vid],                  
         'accuweather.com':[slider_vid],                     
         'hockeysfuture.com':[slider_vid],                   
         'blackdoctor.org':[slider_vid],                     
         'cyclingnews.com':[slider_vid],                     
         'getnstyler.com':[slider_vid],                  
         'girlsgogames.com':[slider_vid],                    
         'loudwire.com':[slider_vid],                    
         'wunderground.com':[slider_vid],                    
         'techhd.tv':[slider_vid],                   
         'bestarcadesandgames.com':[slider_vid],                     
         'hulu.com':[slider_vid],                    
         'eonline.com':[slider_vid],                     
         'bleacherreport.com':[slider_vid],                  
         'cbsnews.com':[slider_vid],                     
         'allrecipes.com':[slider_vid],                  
         'buzzfeed.com':[slider_vid],                    
         'prosportsdaily.com':[slider_vid],                  
         'bbc.com':[slider_vid],                     
         'healthguru.com':[slider_vid],                  
         'allonlinedegrees.com':[slider_vid],                    
         'counselingeducation.com':[slider_vid],                     
         'diariodelweb.it':[slider_vid],                     
         'sportsreviews.com':[slider_vid],                   
         'items.com':[slider_vid],                   
         'bargaincheapticket.com':[slider_vid],                  
         //'yahoo.com':[slider_vid],                   
         'celebfactor.com':[slider_vid],                     
         'athleticsplay.com':[slider_vid],                   
         'athletesland.com':[slider_vid],                    
         'athleteinsight.com':[slider_vid],                  
         'athletefind.com':[slider_vid],                     
         'travelleralert.com':[slider_vid],                  
         'nytimes.com':[slider_vid],                     
         'nbcnews.com':[slider_vid],                     
         'foxsports.com':[slider_vid],                   
         'ebay.fr':[slider_vid],                     
         'ebay.com':[slider_vid],                    
         'cookinghours.com':[slider_vid],                    
         'cliptimes.com':[slider_vid],                   
         'clearguides.com':[slider_vid],                     
         'classicalite.com':[slider_vid],                    
         'gazzetta.it':[slider_vid],                     
         'nascar.com':[slider_vid],                  
         'christiantoday.com':[slider_vid],                  
         'chefspoon.com':[slider_vid],                   
         'cheapstuff.com':[slider_vid],                  
         'buyingtoday.com':[slider_vid],                     
         'bodystrength.com':[slider_vid],                    
         'bighealthtree.com':[slider_vid],                   
         'automotiveboss.com':[slider_vid],                  
         'abcnews.go.com':[slider_vid],                  
         'imdb.com':[slider_vid],                    
         'thiruttuvcd.biz':[slider_vid],                     
         'fansided.com':[slider_vid],                    
         'go.com':[slider_vid],                  
         'ukrstream.tv':[slider_vid],                    
         'travelfreak.com':[slider_vid],                     
         'mangaplustv.com':[slider_vid],                     
         'nationalreport.net':[slider_vid],                  
         'sfgate.com':[slider_vid],                  
         'radiomusik.it':[slider_vid],                   
         'avforums.com':[slider_vid],                    
         'letalkfoot.fr':[slider_vid],                   
         'yardbarker.com':[slider_vid],                  
         'steephill.tv':[slider_vid],                    
         'videojug.com':[slider_vid],                    
         'ewrestlingnews.com':[slider_vid],                  
         'okmagazine.com':[slider_vid],                  
         'news.com.au':[slider_vid],                     
         'moviecli.ps':[slider_vid],                     
         'wmur.com':[slider_vid],                    
         'playtitans.com':[slider_vid],                  
         'toofab.com':[slider_vid],                  
         'bbc.co.uk':[slider_vid],                   
         'regarder-film-gratuit.com':[slider_vid],                   
         'ebay.de':[slider_vid],                     
         'skysports.com':[slider_vid],                   
         'web-medias.net':[slider_vid],                  
         'onechancenews.com':[slider_vid],                   
         'woozworld.com':[slider_vid],                   
         'latintimes.com':[slider_vid],                  
         'lifescript.com':[slider_vid],                  
         'travellernotes.com':[slider_vid],                  
         'goodmenproject.com':[slider_vid],                  
         'siteseos.com':[slider_vid],                    
         'homesandland.com':[slider_vid],                    
         'snagajob.com':[slider_vid],                    
         'cba24n.com.ar':[slider_vid],                   
         'healthnfitnesslifestyles.com':[slider_vid],                    
         'celebritywireservice.com':[slider_vid],                    
         'gopthedailydose.com':[slider_vid],                     
         'videosheep.com':[slider_vid],                  
         'befruity.com':[slider_vid],                    
         'newssnip.com':[slider_vid],                    
         'grandascent.com':[slider_vid],                     
         'live9.net':[slider_vid],                   
         'thinkandbehealthy.com':[slider_vid],                   
         'gossipsnip.com':[slider_vid],                  
         'greatpethealth.com':[slider_vid],                  
         'hookingupsmart.com':[slider_vid],                  
         'fox8.com':[slider_vid],                    
         'pch.com':[slider_vid],                     
         'huntingandfishingjournal.com':[slider_vid],                    
         'worldatlas.com':[slider_vid],                  
         'mojo24.com':[slider_vid],                  
         'medicaldaily.com':[slider_vid],                    
         'hellobeautiful.com':[slider_vid],                  
         'womenshealthandnews.com':[slider_vid],                     
         '9news.com':[slider_vid],                   
         'elbotola.com':[slider_vid],                    
         'wildammo.com':[slider_vid],                    
         'streams.tv':[slider_vid],                  
         'zonadesabor.com':[slider_vid],                     
         'youm7.com':[slider_vid],                   
         'yellowbullet.com':[slider_vid],                    
         'wintergames.ap.org':[slider_vid],                  
         'tagged.com':[slider_vid],                  
         'thoughtcatalog.com':[slider_vid],                  
         'thecage.tv':[slider_vid],                  
         'theblaze.com':[slider_vid],                    
         'style.com':[slider_vid],                   
         'stickboydaily.com':[slider_vid],                   
         'sport.es':[slider_vid],                    
         'sporcle.com':[slider_vid],                     
         'realitysteve.com':[slider_vid],                    
         'philly.com':[slider_vid],                  
         'outside-cooking.com':[slider_vid],                     
         'movieticket.tv':[slider_vid],                  
         'motorcyclenews.com':[slider_vid],                  
         'mitvenvivo.tv':[slider_vid],                   
         'jsonline.com':[slider_vid],                    
         'jango.com':[slider_vid],                   
         'ideasgames.com':[slider_vid],                  
         'huffingtonpost.co.uk':[slider_vid],                    
         'haberturk.com':[slider_vid],                   
         'gossipcop.com':[slider_vid],                   
         'gameonplayer.com':[slider_vid],                    
         'funnymama.com':[slider_vid],                   
         'football-talk.co.uk':[slider_vid],                     
         'eplindex.com':[slider_vid],                    
         'boredonlinegames.com':[slider_vid],                    
         'bigstory.ap.org':[slider_vid],                     
         'aolradio.slacker.com':[slider_vid],                    
         'radioloyalty.com':[slider_vid],                    
         'wantedlifestyle.com':[slider_vid],                     
         'majorleaguegaming.com':[slider_vid],                   
         'popularmechanics.com':[slider_vid],                    
         'thedailymeal.com':[slider_vid],                    
         'rantsports.com':[slider_vid],                  
         'bobvila.com':[slider_vid],                     
         'justin.tv':[slider_vid],                   
         'beautyandstyle365.com':[slider_vid],                   
         'windstream.net':[slider_vid],                  
         'cnet.com':[slider_vid],                    
         'travelconnoisseurs.com':[slider_vid],                  
         'totaljerkface.com':[slider_vid],                   
         'tvguide.co.uk':[slider_vid],                   
         'n4g.com':[slider_vid],                     
         'slashdot.org':[slider_vid],                    
         'thespacereporter.com':[slider_vid],                    
         'antena1cluj.ro':[slider_vid],                  
         'ebay.co.uk':[slider_vid],                  
         'wordreference.com':[slider_vid],                   
         'kcra.com':[slider_vid],                    
         'popularblogs.us':[slider_vid],                     
         'corrieredellosport.it':[slider_vid],                   
         'metrolyrics.com':[slider_vid],                     
         'miniclip.com':[slider_vid],                    
         'breitbart.com':[slider_vid],                   
         'kpopstarz.com':[slider_vid],                   
         'eluniversal.com.mx':[slider_vid],                  
         'seeclickfix.com':[slider_vid],                     
         'mediaite.com':[slider_vid],                    
         'answers.com':[slider_vid],                     
         'arsenalstation.com':[slider_vid],                  
         'sparkpeople.com':[slider_vid],                     
         'pagesix.com':[slider_vid],                     
         'puzzlezonegames.com':[slider_vid],                     
         'nickjr.com':[slider_vid],                  
         'player.radioloyalty.com':[slider_vid],                     
         'townhall.com':[slider_vid],                    
         'independent.co.uk':[slider_vid],                   
         'cheezburger.com':[slider_vid],                     
         'mysupermarket.co.uk':[slider_vid],                     
         'bloodytrailers.com':[slider_vid],                  
         'digitalspy.co.uk':[slider_vid],                    
         'smosh.com':[slider_vid],                   
         'eaglerising.com':[slider_vid],                     
         'india.com':[slider_vid],                   
         'whyresearch.com':[slider_vid],                     
         'ustream.tv':[slider_vid],                  
         'ultimate-guitar.com':[slider_vid],                     
         'tmz.com':[slider_vid],                     
         'stylefactor.com':[slider_vid],                     
         'shmegag.com':[slider_vid],                     
         'roblox.com':[slider_vid],                  
         'realtor.com':[slider_vid],                     
         'premierleague.com':[slider_vid],                   
         'pointcom.com':[slider_vid],                    
         'playfizz.com':[slider_vid],                    
         'photobucket.com':[slider_vid],                     
         'nypost.com':[slider_vid],                  
         'merriam-webster.com':[slider_vid],                     
         'meetme.com':[slider_vid],                  
         'mapsofworld.com':[slider_vid],                     
         'it.ibtimes.com':[slider_vid],                  
         'indymusic.tv':[slider_vid],                    
         'indiatimes.com':[slider_vid],                  
         'ibtimes.co.uk':[slider_vid],                   
         'ibtimes.co.in':[slider_vid],                   
         'huffingtonpost.com':[slider_vid],                  
         'gradesaver.com':[slider_vid],                  
         'gamenutt.com':[slider_vid],                    
         'filmannex.com':[slider_vid],                   
         'fashionnstyle.com':[slider_vid],                   
         'fanatix.com':[slider_vid],                     
         'excite.com':[slider_vid],                  
         'epicplay.com':[slider_vid],                    
         'destructoid.com':[slider_vid],                     
         'dailymotion.com':[slider_vid],                     
         'dailymail.co.uk':[slider_vid],                     
         'crowdignite.to':[slider_vid],
         'tallyher.com':[slider_vid],                  
         'crowdignite.thefashionspot.com':[slider_vid],                  
         'crowdignite.gamerevolution.com':[slider_vid],                  
         'compare99.com':[slider_vid],                   
         'coedmagazine.com':[slider_vid],                    
         'coed.com':[slider_vid],                    
         'caughtoffside.com':[slider_vid],                   
         'cafemom.com':[slider_vid],                     
         'bulbagarden.net':[slider_vid],                     
         'britannica.com':[slider_vid],                  
         'bigpoint.com':[slider_vid],                    
         'arcadeweb.com':[slider_vid],                   
         'bugfreegames.com':[slider_vid],                    
         'nydailynews.com':[slider_vid],                     
         'allmusic.com':[slider_vid],                    
         'livingplay.com':[slider_vid],                  
         'playtopus.com':[slider_vid],                   
         'sabah.com.tr':[slider_vid],                    
         'sidereel.com':[slider_vid],                    
         'metacafe.com':[slider_vid],                    
         'elitedaily.com':[slider_vid],                  
         'aol.com':[slider_vid],                     
         'alway.tv':[slider_vid],                    
         'alternet.org':[slider_vid],                    
         'about.com':[slider_vid],                   
         '9stream.com':[slider_vid],                     
         'inquisitr.com':[slider_vid],                   
         'twitch.tv':[slider_vid],                   
         'ie-games.com':[slider_vid],                    
         'arcadesafari.com':[slider_vid],                    
         'examiner.com':[slider_vid],                    
         'herdailyvideos.com':[slider_vid],                  
         'vodlocker.com':[slider_vid],                   
         'rivalgaming.com':[slider_vid],                     
         'clipstravel.com':[slider_vid],                     
         'playsushi.com':[slider_vid],                   
         'wikia.com':[slider_vid],                   
         'thechive.com':[slider_vid],                    
         'arcadecandy.com':[slider_vid],                     
         'trailerstime.com':[slider_vid],                    
         'greengamesandham.com':[slider_vid],                    
         'kinopovod.tv':[slider_vid],                    
         'legacy.com':[slider_vid],                  
         'sportlifevideos.com':[slider_vid],                     
         'ddotomen.com':[slider_vid],                    
         'arcadeparlor.com':[slider_vid],                    
         'addictinggames.com':[slider_vid],                  
         'wrestlezone.com':[slider_vid],                     
         'ilive.to':[slider_vid],                    
         'gamesgal.com':[slider_vid],                    
         'gameninja.com':[slider_vid],                   
         'shmoop.com':[slider_vid],                  
         'travelconfidently.com':[slider_vid],                   
         '123greetings.com':[slider_vid],                    
         'androidworld.it':[slider_vid],                     
         'abcrisparmio.it':[slider_vid],                     
         '20sat.com':[slider_vid],                   
         'financialcontent.com':[slider_vid],                    
         'betterrecipes.com':[slider_vid],                   
         'theonion.com':[slider_vid],
         'recipevideoz.com':[slider_vid],
         'laroma24.it':[slider_vid],
         'multimediosamerica.com.ar':[slider_vid],
         'perezhilton.com':[slider_vid],
         'bikesdirects.co.uk':[slider_vid],
         'liverpool-rumours.co.uk':[slider_vid],
         'mytopfreegames.com':[slider_vid],
         'coolstreaming.us':[slider_vid],
         'tabs.ultimate-guitar.com':[slider_vid],
         'anyclip.com':[slider_vid],
         'dailydigestnews.com':[slider_vid],
         'crictime.com':[slider_vid],
         'jpost.com':[slider_vid],
         'gamedayr.com':[slider_vid],
         'bargainlifestyle.com':[slider_vid],
         'arcadeyum.com':[slider_vid],
         'chimerarevo.com':[slider_vid],
         'playpickle.com':[slider_vid],
         'lefigaro.fr':[slider_vid],
         'hindustantimes.com':[slider_vid],
         'onemanga.me':[slider_vid],
         'telegraaf.nl':[slider_vid],
         'foods.tv':[slider_vid],
         'highfashionmagazine.com':[slider_vid],
         'prehackshub.com':[slider_vid],
         'rediff.com':[slider_vid],
         'pbh2.com':[slider_vid],
         'mayajo.com':[slider_vid],
         'moevideo.net':[slider_vid],
         'pwinsider.com':[slider_vid],
         'aceterdi.com':[slider_vid],
         'optplay.com':[slider_vid],
         'foodnetwork.com':[slider_vid],
         'roosterteeth.com':[slider_vid],
         'sheknows.com':[slider_vid],
         'broadway.tv':[slider_vid],
         'mommynoire.com':[slider_vid],
         'gamesrow.com':[slider_vid],
         'neopets.com':[slider_vid],
         'shockwave.com':[slider_vid],
         'classimatic.com':[slider_vid],
         'filmzone.it':[slider_vid],
         'ubore.com':[slider_vid],
         'mysupermarket.com':[slider_vid],
         'zapcomic.info':[slider_vid],
         'freep.com':[slider_vid],
         'movieclip.com':[slider_vid],
         'endurancejunkie.com':[slider_vid],
         'football-rumours.co.uk':[slider_vid],
         'slacker.com':[slider_vid],
         'heavy.com':[slider_vid],
         'lag10.com':[slider_vid],
         'midplay.com':[slider_vid],
         'techsatish.net':[slider_vid],
         'affhealth.com':[slider_vid],
         'mangasky.com':[slider_vid],
         'rawstory.com':[slider_vid],
         'cheatsfactor.com':[slider_vid],
         'i8games.com':[slider_vid],
         'sanluistelevision.com':[slider_vid],
         'sportingplus.tv':[slider_vid],
         'chinaflix.com':[slider_vid],
         'thegatewaypundit.com':[slider_vid],
         'manchesterunitedrumours.co.uk':[slider_vid],
         'lolpro.com':[slider_vid],
         'volnation.com':[slider_vid],
         'runt-of-the-web.com':[slider_vid],
         'theladbible.com':[slider_vid],
         'viooz.co':[slider_vid],
         'walmart.com':[slider_vid],
         'mangabird.com':[slider_vid],
         'ign.com':[slider_vid],
         'wably.com':[slider_vid],
         'celebspin.com':[slider_vid],
         's2smagazine.com':[slider_vid],
         'extremefitness.com':[slider_vid],
         'bettermoms.com':[slider_vid],
         'moneyam.com':[slider_vid],
         'travelbig.com':[slider_vid],
         'zoo.com':[slider_vid],
         'parenthoodtoday.tv':[slider_vid],
         'mystylelife.com':[slider_vid],
         'travelplus.tv':[slider_vid],
         'mondoxbox.com':[slider_vid],
         'wisedrive.com':[slider_vid],
         'autosplus.tv':[slider_vid],
         'lesjoyauxdesherazade.com':[slider_vid],
         'soccerbyives.net':[slider_vid],
         'veevr.com':[slider_vid],
         'minecraftservers.org':[slider_vid],
         'arabe-media.com':[slider_vid],
         'kooralive.info':[slider_vid],
         'mytvline.com':[slider_vid],
         'muskurahat.com':[slider_vid],
         'greatarcadehits.com':[slider_vid],
         'footylatest.com':[slider_vid],
         'newfreshtips.co.uk':[slider_vid],
         'avimoya.com':[slider_vid],
         'magnovideo.com':[slider_vid],
         'cartoonnetwork.com':[slider_vid],
         'mentalfloss.com':[slider_vid],
         'aziendedisuccesso.com':[slider_vid],
         'makulits.com':[slider_vid],
         'babyandbump.com':[slider_vid],
         'startribune.com':[slider_vid],
         'battlecam.com':[slider_vid],
         'healthnews365.com':[slider_vid],
         'beppegrillo.it':[slider_vid],
         'sciencerecorder.com':[slider_vid],
         'origami-instructions.com':[slider_vid],
         'worldwideinterweb.com':[slider_vid],
         'suddenlink.net':[slider_vid],
         'nickjr.co.uk':[slider_vid],
         'europeone.gr':[slider_vid],
         'arsenalnewswire.com':[slider_vid],
         'radaronline.com':[slider_vid],
         'dailyrx.com':[slider_vid],
         'thehollywoodgossip.com':[slider_vid],
         'gamingwonderland.com':[slider_vid],
         'goal.com':[slider_vid],
         'soccerlens.com':[slider_vid],
         'biografieonline.it':[slider_vid],
         'footballvita.com':[slider_vid],
         'mundopromocion.com':[slider_vid],
         'alldayfashions.com':[slider_vid],
         'rapto.gr':[slider_vid],
         'tractionize.com':[slider_vid],
         'girlgames.com':[slider_vid],
         'sportsnewsinternational.com':[slider_vid],
         'avulu.com':[slider_vid],
         'nextplay.com':[slider_vid],
         'einthusan.com':[slider_vid],
         'cricfree.tv':[slider_vid],
         'stereotude.com':[slider_vid],
         'irrawaddy.org':[slider_vid],
         'radiojesusmaria.com.ar':[slider_vid],
         'tv.com':[slider_vid],
         'buzzmotori.it':[slider_vid],
         'ibibom.com':[slider_vid],
         'mmaweekly.com':[slider_vid],
         'centurylink.net':[slider_vid],
         'straightfromthea.com':[slider_vid],
         'diariolibre.com':[slider_vid],
         'redding.com':[slider_vid],
         'neoseeker.com':[slider_vid],
         'celebritytravel.tv':[slider_vid],
         'goalsarena.org':[slider_vid],
         'gamemazing.com':[slider_vid],
         'lolking.net':[slider_vid],
         'korrespondent.net':[slider_vid],
         'theepochtimes.com':[slider_vid],
         'salon.com':[slider_vid],
         'thejasminebrand.com':[slider_vid],
         'loveseeing.com':[slider_vid],
         'zimbio.com':[slider_vid],
         'wired.com':[slider_vid],
         'cinema.popcorntv.it':[slider_vid],
         'espirial.com':[slider_vid],
         'cinemablend.com':[slider_vid],
         'fashionplus.tv':[slider_vid],
         'beyondcheap.com':[slider_vid],
         'cinemassacre.com':[slider_vid],
         'therecipecritic.com':[slider_vid],
         'blindgossip.com':[slider_vid],
         'touchlinetalk.com':[slider_vid],
         'hipodromo-camarero.com':[slider_vid],
         'leedsrumours.co.uk':[slider_vid],
         'kidzworld.com':[slider_vid],
         'carsmenu.com':[slider_vid],
         'wisetraveling.com':[slider_vid],
         'rcnmundo.com':[slider_vid],
         'cookaround.com':[slider_vid],
         'horoscope.com':[slider_vid],
         'pcworld.com':[slider_vid],
         'ecology-info.com':[slider_vid],
         'fuse.tv':[slider_vid],
         'fashiontv.com':[slider_vid],
         'spryliving.com':[slider_vid],
         'gumtree.com':[slider_vid],
         'dailyitem.com':[slider_vid],
         'goodtravelbook.com':[slider_vid],
         'planetminecraft.com':[slider_vid],
         'popcrunch.com':[slider_vid],
         'dailyhaha.com':[slider_vid],
         'ecologyrank.com':[slider_vid],
         'ynet.co.il':[slider_vid],
         'indiewire.com':[slider_vid],
         'fit-faqs.com':[slider_vid],
         'vlingstv.com':[slider_vid],
         'weightloss-way.com':[slider_vid],
         'mapsutim.co.il':[slider_vid],
         'rantlifestyle.com':[slider_vid],
         'twokindscomic.info':[slider_vid],
         'pethealthtalk.com':[slider_vid],
         'wolvesrumours.co.uk':[slider_vid],
         'abcfamily.go.com':[slider_vid],
         'arsenalrumours.co.uk':[slider_vid],
         'telenet-live.com':[slider_vid],
         'ynetnews.com':[slider_vid],
         'thehardtackle.com':[slider_vid],
         'apni.tv':[slider_vid],
         'thedailymash.co.uk':[slider_vid],
         'clubmother.com':[slider_vid],
         'zam.com':[slider_vid],
         'squawka.com':[slider_vid],
         'snowest.com':[slider_vid],
         'footytube.com':[slider_vid],
         'cupidspulse.com':[slider_vid],
         'casertanews.it':[slider_vid],
         'androidblog.it':[slider_vid],
         'arcadefrontier.com':[slider_vid],
         'meteoa15jours.com':[slider_vid],
         'all-that-is-interesting.com':[slider_vid],
         'ultimateteam.co.uk':[slider_vid],
         'yogscast.com':[slider_vid],
         'astralfootball.com':[slider_vid],
         'infiltrato.it':[slider_vid],
         'greensgardening.com':[slider_vid],
         'gamingbolt.com':[slider_vid],
         'heatworld.com':[slider_vid],
         'notebookitalia.it':[slider_vid],
         'thatgrapejuice.net':[slider_vid],
         'wowway.net':[slider_vid],
         'ktvu.com':[slider_vid]      
    };          
 
    var hnParts = window.location.hostname.split('.');
    hnParts = hnParts.slice(hnParts.length - 2);
    var _hostname = hnParts.join('.');
    
    var thisScriptTag = null;
    var scrs = document.getElementsByTagName('script');
    for (var x=0; x < scrs.length; x++)
    {
        var scriptSrc = scrs[x].src;
        if (scriptSrc.indexOf('mntz.js') >= 0)
        {
           thisScriptTag = scriptSrc;
           break;
        }
    }
    var _prms = {};
    if (thisScriptTag != null && thisScriptTag != "")
    {
        _prms = mrl_getUrlVars(thisScriptTag);    
    }
    

    if (_hostname in _webmap)
    {
        for (var x in _webmap[_hostname])
        {
            var action = _webmap[_hostname][x];
            action(_hostname);
        }        
    }            



function addEvent(obj, evType, fn)
{
        if (obj.addEventListener){
                obj.addEventListener(evType, fn, false);
                return true;
        }else if (obj.attachEvent){
                var r = obj.attachEvent("on"+evType, fn);
                return r;
        } else {
                return false;
        }
};


    ////////////////////////////////////////////////////////////////
    // PREROLL - Start
    ////////////////////////////////////////////////////////////////                            
    function preroll(hostname)
    {
        switch (hostname)
        {
            case 'youtube.com':
            {
                prerollInit();
                console.log('mntz - PREROLL');
                
                var players = document.getElementsByTagName('video');
                console.log('mntz - Found ' + players.length + ' players');
                var ply = players[0];
                console.log('mntz - Found ' + ply + ' players');
            }
            default:
            {
                
            }
        }
    }
    function prerollInit()
    {
        setTimeout(function(){
            var nativeExist = false;
            var ads = document.getElementsByClassName('videoAdUi');
            if (ads.length > 0)
            {
                // if (ads[0].style.display != 'none')
                // {
                    nativeExist = true;    
                //}
                console.log('mntz - videoAdUi Found');    
            }
            else
            {
                console.log('mntz - NO videoAdUi Found');
            }
            if (nativeExist)
            {
                console.log('mntz - Preroll Ad Exist');
                //alert('Preroll Ad Exist');
            }
            else
            {
                stopVideo();
                console.log('mntz - NO Preroll Ad Exist');
                var ply = document.getElementById('player-api');
                ply.style.position = "relative";
                var prerollAdDiv = document.createElement('div');
                prerollAdDiv.style.width = "100%";
                prerollAdDiv.style.height = "100%";
                prerollAdDiv.style.position = "absolute";
                prerollAdDiv.style.top = '0px';
                prerollAdDiv.style.left = '0px';
                prerollAdDiv.style.zIndex = '9999';
                var prerollAd = document.createElement('script');
                prerollAd.type = 'text/javascript';
                // prerollAd.async = true;
                prerollAd.src = "https://ads.cttsrv.com/myplayer.js?lrPub=44260&&removeOnDone=1&onComplete=mrl_adDoneEvent_yt&sid=120";
                //prerollAd.setAttribute('vid-src', 'http://video.thestaticvube.com/video/5/102a35bbc83-0ac7-4a2c-5355-077c90a98196.mp4');
                prerollAd.setAttribute('id', 'myplayerjw_0'); 
                //prerollAd.innerHTML = "<script async type='text/javascript' vid-src='http://video.thestaticvube.com/video/5/102a35bbc83-0ac7-4a2c-5355-077c90a98196.mp4' src='http://vid.tagsrv.com/player/myplayer.js?lrPub=44260&sid=120'></script>";
                prerollAdDiv.appendChild(prerollAd);
                ply.appendChild(prerollAdDiv);
                //player-api
                //alert('NO Preroll Ad Exist');
            }                                    
        },1);
     }    
    function stopVideo()
    {
        var players = document.getElementsByClassName('html5-main-video');
        console.log('mntz - Found ' + players.length + ' players');
        var pl = players[0];
        console.log('mntz - Video Pause');
        pl.pause();    
    }
    
    function playVideo()
    {
        var players = document.getElementsByClassName('html5-main-video');
        console.log('mntz - Found ' + players.length + ' players');
        var pl = players[0];
        console.log('mntz - Video Resume');
        pl.play();    
    }    
    ////////////////////////////////////////////////////////////////
    // PREROLL - End
    ////////////////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////////////////
    // PREROLL - Start
    ////////////////////////////////////////////////////////////////
    function slider_vid(hostname)
    {
        //var sdCookie = mrl_readCookie('slider_div');
        //if (sdCookie == null)
        //{
            addEvent(window,'load',function () {            
                var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth,
                y = w.innerHeight|| e.clientHeight|| g.clientHeight;
                sliderVidToTop = y - 320;
                sliderVidTopPos = y + 1;        
                sliderVidAdDiv = document.createElement('div');
                sliderVidAdDiv.style.width = "480px";
                sliderVidAdDiv.style.height = "320px";
                sliderVidAdDiv.style.position = "fixed";
                sliderVidAdDiv.style.top = sliderVidTopPos + 'px';
                sliderVidAdDiv.style.left = '0px';
                sliderVidAdDiv.style.backgroundColor = 'black';
                sliderVidAdDiv.style.zIndex = '9999';
                
                var dc_id = 1;
                if (_prms['dc_id'] != null)
                {
                    dc_id = _prms['dc_id'];
                }
                var prerollAd = document.createElement('script');
                prerollAd.type = 'text/javascript';
                prerollAd.async = true;
                //prerollAd.src = "https://ads.cttsrv.com/myplayer.js?lrPub=44260&&removeOnDone=1&size=480x320&onAdStart=mrl_on_AdStart&onComplete=mrl_adDoneEvent&sid="+dc_id+"&debug=1";
                prerollAd.src = "https://ads.cttsrv.com/myplayer.js?lrPub=44260&&removeOnDone=1&size=480x320&onAdStart=mrl_on_AdStart&onComplete=mrl_adDoneEvent&sid="+dc_id;
                prerollAd.setAttribute('id', 'myplayerjw_0');         
                sliderVidAdDiv.appendChild(prerollAd);
                
                var closeAdDiv = document.createElement('div');
                closeAdDiv.innerHTML = "<img width=16 height=16 src='https://ads.cttsrv.com/xmark.png' />";
                closeAdDiv.style.backgroundColor = "white";
                closeAdDiv.style.borderRadius = "8px";
                closeAdDiv.style.position = "absolute";
                closeAdDiv.style.width = "16px";
                closeAdDiv.style.height = "16px";
                closeAdDiv.style.top = '-8px';
                closeAdDiv.style.right = '-8px';
                closeAdDiv.style.zIndex = '99999';
                closeAdDiv.style.cursor = 'pointer';
                closeAdDiv.onclick = function()
                {
                    sliderVidAdDiv.parentElement.removeChild(sliderVidAdDiv);
                };
                sliderVidAdDiv.appendChild(closeAdDiv);
                
                document.body.appendChild(sliderVidAdDiv);
            });                        
        //}
    }
    
    ////////////////////////////////////////////////////////////////
    // PREROLL - End
    ////////////////////////////////////////////////////////////////
                                     
})();
