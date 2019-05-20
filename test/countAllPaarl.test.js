describe('countAllPaarl' , function(){
    it('returns the number of registration numbers in the string for Paarl' , function(){
        assert.equal(countAllPaarl(strC), 3);

    });
    it('should  return false if the are no registration numbers from paarl' , function(){
        assert.equal(countAllPaarl(""), false);
    });

    });



