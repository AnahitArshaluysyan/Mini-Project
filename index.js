const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
 
toEscape = string => JSON.stringify(string); 
$("#escape").on('click',function escape() { 
      text2.value = toEscape(text1.value).slice(1, -1);
});
               
const specials = { 'b': '\b',  'f': '\f', 'n': '\n', 'r': '\r',  't': '\t', '"': '\"',};                          
                
$('#unescape').on( 'click', () => {
const string = text2.value;
let result = "";
for (i = 0; i < string.length; i++) { 
if (string[i] == '\\') { 
i++;               
let char = string.charAt(i);
if (char in specials) result+=specials[char];
else result += string[i];                   
}
else result += string[i];
}
text1.value = result;
});