import { a1, a2, b1, b2, c1 } from "../data/freqWords/index.js";

async function getWords(req, res) {
  try {
    const {count, level} = req.params;
    let data = [];
    if(!count && !level) return res.status(400).send("count or level not found");
    if(Number(count)<0 || Number(count)>900) return res.status(400).send("count is invalid");
    const leavels = level.split(",");
    for(let item of leavels){
        if(!["a1", "a2", "b1", "b2", "c1"].includes(item)) return res.status(400).send("level is invalid");  
    }
    const result = [];
    for (let i = 0; i < count; i++) {
        let index = Math.floor(Math.random()*leavels.length);
        switch (leavels[index]) {
            case 'a1': data = a1; break;
            case 'a2': data = a2; break;
            case 'b1': data = b1; break;
            case 'b2': data = b2; break;
            default: data = c1;
        }
        let i = Math.floor(Math.random() * data.length);
        console.log(i);
        result.push(data[i]);
    }
    
    /*
        1. ajratib olish levellarni
        2.levelni tekshirish [a1, a2, b1, b2, c1]
        3.resultga tasodifiy so'zlarni yig'ish
        4.
    */
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

export { getWords };
