module.exports = function(app){
    var BlockImg = Object.getPrototypeOf(app).BlockImg = new app.Component("block-img");
    //BlockImg.debug = true;
    BlockImg.createdAt      = "2.0.0";
    BlockImg.lastUpdate     = "2.0.0";
    BlockImg.version        = "1";
    // BlockImg.factoryExclude = true;
    // BlockImg.loadingMsg     = "This message will display in the console when component will be loaded.";
    // BlockImg.requires       = [];

    // BlockImg.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return BlockImg;
}