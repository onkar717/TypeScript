interface Omkar {
    readonly DBID : number
    email : string,
    userId: number
    googleId? : string
    stratTrail() : string
    getCoupon(coupname: string , value: number): number
}

const paras : Omkar = {DBID : 22222 , email : "sfsfhs@mail.com" , userId:9696 , 
    stratTrail() {
        return "Omkar dada shelke"
    },
    getCoupon(coupname : "Onkar", value : 220224) {
        return 123456789;
    },
}

// paras.DBID = 979799;