const start = (msg) => {
  let characterBase = {
    username: msg.author,
    health: 10,
    attack: 1,
    defence: 1,
    
  };

  msg.reply("start");
};

exports.start = start;
