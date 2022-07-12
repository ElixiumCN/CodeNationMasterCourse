
num = 333


function isPalindrome(s,i) {
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
    }

isPalindrome(console.log(num));

// copy paste activity info text then send it 10+ lines down for writing code above.
// Create a variable called num.
// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202).

