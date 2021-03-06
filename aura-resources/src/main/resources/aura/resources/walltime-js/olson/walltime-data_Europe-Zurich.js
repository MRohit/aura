(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"Swiss":[{"name":"Swiss","_from":"1941","_to":"1942","type":"-","in":"May","on":"Mon>=1","at":"1:00","_save":"1:00","letter":"S"},{"name":"Swiss","_from":"1941","_to":"1942","type":"-","in":"Oct","on":"Mon>=1","at":"2:00","_save":"0","letter":"-"}],"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Zurich":[{"name":"Europe/Zurich","_offset":"0:34:08","_rule":"-","format":"LMT","_until":"1853 Jul 16"},{"name":"Europe/Zurich","_offset":"0:29:46","_rule":"-","format":"BMT","_until":"1894 Jun"},{"name":"Europe/Zurich","_offset":"1:00","_rule":"Swiss","format":"CE%sT","_until":"1981"},{"name":"Europe/Zurich","_offset":"1:00","_rule":"EU","format":"CE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);
