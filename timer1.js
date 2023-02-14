
const alarm = process.argv.splice(2)

for(let time of alarm){
  setTimeout(() => {
    console.log(`${time} seconds`)
    process.stdout.write('\x07');
  },time*1000)
}


