(ns lib.core)

(defn ba-shift-left [ba n] 
    (let [nmod (mod n 8)]
      (map (fn [x] (bit-and x 0xff))
        (concat
          (remove nil?
            (list
              (let [x 
                (bit-shift-right
                  (first ba)
                  (- 8 nmod))]
                (if (> x 0) x))))
          (map-indexed
            (fn [i elem]
              (+ 
                (bit-shift-left elem nmod)
                (bit-shift-right
                  (get
                    (vec ba)
                    (inc i))
                  (- 8 nmod))
                ))
            ba)
           (repeat (int (/ n 8)) 0)))))
