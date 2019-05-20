describe('countAllFromTown' , function(){
    it('should return number of registration plates from town ' , function(){
        assert.equal(countAllFromTown(regNu), 3);
    });
    it('should return zero if the are no registration plates in the peremeter ' , function(){
        assert.equal(countAllFromTown(""), 0);
    });

});

