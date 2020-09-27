module.exports = class TimeControl{

    static FullTimeNow(){

        let now = new Date();
        now = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        return now.toString();
    }

}