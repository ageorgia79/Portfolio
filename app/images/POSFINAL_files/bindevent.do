



try {


 var InterYieldOptions =[{
   "e": "click",
   "debug": "false",
   "affiliate": "mrlmedia2",
   "subid": "DP2061AAAAAA",
   "ecpm": "0",
   "snoozeMinutes": "3",
   "maxAdCountsPerInterval": "6",
   "adCountIntervalHours": "24",
   "attributionLogo": "custom attribution",
   "attributionTitle": "custom attribution",
   "attributionLink": "custom attribution"
}];


 if(  document.getElementById('InterYieldScript') === null ) { 
    var InterYieldScript = document.createElement("script");
    InterYieldScript.type = "text/javascript";
    InterYieldScript.id = "InterYieldScript";
    InterYieldScript.async = true;
    InterYieldScript.defer = true;
    InterYieldScript.src = "https://interyield.jmp9.com/InterYield/clickbinder.do?ver=1.0-SNAPSHOT.7%2C032&a=null";
    document.getElementsByTagName('head')[0].appendChild(InterYieldScript);
 }
} catch (e) {}


