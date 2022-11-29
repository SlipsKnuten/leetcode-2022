var twoSum = function(nums, target) {
    for(var i = 0; i<nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){//index i ökar i värde av 1. sålänge längden är större än värdet j så loopar vi.
            if(nums[i]+nums[j]===target){
                return [i, j]
            }            
        }      
    }
};