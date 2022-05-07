var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    console.log("Millie ッ - Discord Özel RPC => RPC'niz Hazır, iyi Günlerde Kullanın."),
client.request('SET_ACTIVITY', { 
pid: process.pid, 
activity : {
details : "❤️・Stranger Things Türkiye",  // Başlığın altında gözüken ince fontlu yazı kısmı.
assets : {
large_image : "❤️・P ",  // ARich Presence kısmına koyduğunuz fotoğrafın adını yazın.
small_image : "❤️", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın.
large_text : "P <3", // Botu oluştururken girdiğiniz ismi yazın.
},
buttons : [{label : "Stranger Things (Discord)" , url : "https://discord.gg/yYbFZPhJmg"},{label : "Stranger Things (İnstagram)" , url : "https://instagram.com/strangerturkiyedc"}]
}
})
})
client.login({ clientId : "972482537999970344" }).catch(console.error); //clientID bölümüne kendi Bot (Application) ID'ni yazacaksınız.
