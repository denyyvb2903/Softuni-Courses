function encryptingPassword(input) {
    let n = parseInt(input[0]);
    for (let i = 1; i <= n; i++) {
      let password = input[i];
      let symbols = password.match(/^([^<>]+)[>].*[<]\1$/);
    
      if (!symbols) {
        console.log('Try another password!');
        continue;
      }
    
      let groups = password.match(/[0-9]+[|][a-z]+[|][A-Z]+[|][^<>]+/);
    
      if (!groups) {
        console.log('Try another password!');
        continue;
      }
    
      let [nums, lower, upper, symbols2] = groups[0].split('|');
      let encrypted = nums + lower + upper + symbols2.replace(/[<>]/g, '');
    
      console.log(`Password: ${encrypted}`);
    }
  }
  
  encryptingPassword([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$',
  ]);
  console.log(`================`)
  encryptingPassword(["5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*"])
  
  
  
  