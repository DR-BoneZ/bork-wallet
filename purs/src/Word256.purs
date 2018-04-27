module Basement.Types.Word256 (
    Word256(..)
) where
  
--import Data.Monoid
import Prelude
import Data.UInt as U
import Data.Shift as S
import Data.Word as W

newtype Word256 = Word256 { _w0 :: W.Word64, _w1 :: W.Word64, _w2 :: W.Word64, _w3 :: W.Word64 }

instance showWord256 :: Show Word256 where
show :: Word256 -> String
show (Word256 w) = (show w._w0) <> (show w._w1) <> (show w._w2) <> (show w._w3)

instance bounded256 :: Bounded Word256 where
    top = Word256 { _w0: (top :: W.Word64), _w1: (top :: W.Word64), _w2: (top :: W.Word64), _w3: (top :: W.Word64) }
    bottom = Word256 { _w0: (bottom :: W.Word64), _w1: (bottom :: W.Word64), _w2: (bottom :: W.Word64), _w3: (bottom :: W.Word64) }

instance ord256 :: Ord Word256 where
    compare (Word256 w) (Word256 x) = 
        let dw0 = compare w._w0 x._w0
            dw1 = compare w._w1 x._w1
            dw2 = compare w._w2 x._w2
            dw3 = compare w._w3 x._x3
        in if dw0 /= EQ then dw0
        else if dw1 /= EQ then dw1
        else if dw2 /= EQ then dw2
        else dw3

instance shift256 :: S.Shift Word256 where
    shr = ?undefined
    shl = ?undefined
--    zshr :: Word256 -> U.UInt -> Word256
    zshr (Word256 w) i = Word256 {
        _w0: (S.zshr w._w0 i),
        _w1: (S.zshr w._w1 i) + (S.shl w._w0 $ U.fromInt (64 - U.toInt i)),
        _w2: (S.zshr w._w2 i) + (S.shl w._w1 $ U.fromInt (64 - U.toInt i)),
        _w3: (S.zshr w._w3 i) + (S.shl w._w2 $ U.fromInt (64 - U.toInt i)) }
    cshr = ?undefined
    cshl = ?undefined

-- shiftL :: Int -> Word256 -> Word256
-- shiftL i w = if i > 0 then {
--     (shiftL i (_w0 w)) + (shiftR (64 - i) (_w1 w)),
--     (shiftL i (_w1 w)) + (shiftR (64 - i) (_w2 w)),
--     (shiftL i (_w2 w)) + (shiftR (64 - i) (_w3 w)),
--     (shiftL i (_w3 w)) }
--     else shiftR -i w

-- shiftR :: Int -> Word256 -> Word256
-- shiftR i w = if i > 0 then {
--     (shiftR i (_w0 w)),
--     (shiftR i (_w1 w)) + (shiftL (64 - i) (_w0 w)),
--     (shiftR i (_w2 w)) + (shiftL (64 - i) (_w1 w)),
--     (shiftR i (_w3 w)) + (shiftL (64 - i) (_w2 w)) }
--     else shiftL -i w
