let obj = {
    x: 10,
    fun() {
        console.log(this);  // work fine
        y = {
            x:50,
            gun: () => {
                console.log(this.x);
            }
        }
        y.gun();
    }
}
obj.fun(); 