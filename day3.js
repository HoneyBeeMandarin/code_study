    // 문자열 겹치기
    function solution(my_string, overwrite_string, s) {
        const myStr = [...my_string]
        myStr.splice(s, overwrite_string.length, overwrite_string)
        return myStr.join("")
    }

    // 문자열 섞기
    function solution2(str1, str2) {
        var answer = '';
        for (let i = 0; i < str1.length; i++) {
            answer += str1[i] + str2[i]
        }
        return answer;
    }

    function solution2(str1, str2) {
        // console.log([...str1].map((a, i) => a+str2[i]));
        return [...str1].map((a, i) => a + str2[i]);
    }

    // 문자리스트를 문자열로 변환하기
    function solution3(arr) {
        return arr.join("");
    }

    // 문자열 곱하기
    function solution4(my_string, k) {
        let answer = '';
        for (let i = 0; i < k; i++) {
            answer += my_string;
        }
        return answer;
    }

    // 더 크게 합치기
    function solution5(a, b) {
        let x = String(a) + String(b);
        let y = String(b) + String(a);
        if (Number(x) > Number(y)) {
            return Number(x);
        } else { return Number(y); }
    }

    function solution6(a, b) {
        let atob = String(a) + String(b);
        let mult = 2 * a * b;
        if (Number(atob) == mult) return atob;
        else {
            return Number(atob) > mult ? Number(atob) : mult;
        }
    }
