var message = 'Hello Node!';

var sum = 5 + 3;

console.log(message);
console.log(sum);



const profileDataArgs=process.argv.slice(2,process.argv.length);


const printProfileData = profileDataArr => {
for(let i=0;i<profileDataArr.length; i += 1) {
console.log(profileDataArr[i]);
}
console.log('================');
profileDataArr.forEach((profileItem) => {
console.log(profileItem)
});
};
printProfileData(profileDataArgs);