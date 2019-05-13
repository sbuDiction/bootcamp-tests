describe('totalPhoneBill' , function(){
    it('should return the cost for each sms' , function(){
        assert.equal(totalPhoneBill("sms"), "R0.65");
    }); 
    it('should return the cost for calls' , function(){
        assert.equal(totalPhoneBill("call"), "R2.75");
    });
    it('should return the total cost of the bill' , function(){
        assert.equal(totalPhoneBill(), "R7.45");
    });

});

