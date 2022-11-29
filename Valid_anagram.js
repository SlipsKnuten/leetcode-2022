
    var isAnagram = function(s,t){
        if (s.length !== t.length) return false
        const countS = {}
        const countT = {}
        const N = s.length

        for(let i = 0; i < N; i++){
            if(!countS[s[i]]) countS[s[i]]=0 //countS är ett objekt och måste sättas till 0 så det blir en INT om vi inte har sätt karaktären ännu. om karatären inte förekommer i strängen så sätter vi värdet till 0
            
            if(!countT[t[i]]) countT[t[i]]=0
            countS[s[i]]++ // . a är första bokstaven, värdet på countS går från 0 till 1, index i av sträng s går från 0 till 1. 
            //n är nästa bokstav värdet på countS går från 0 till 1 eftersom vi har inte sätt bokstaven n ännu. index i av sträng a går från 0 till 1.
            countT[t[i]]++
            console.log(t[i])
        }
        for(let ch in countS){
            if(countS[ch] !== countT[ch]) return false
        }
        return true
    }