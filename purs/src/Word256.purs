module Basement.Types.Word256 (
    Word256(..),
    fromByteString
) where
  
--import Data.Monoid
import Prelude
import Data.UInt as UI
import Data.Shift as S
import Data.Word as W
import Data.Num as N
import Data.BigInt as BI
import Data.Eq as E
import Data.ByteString as BS
import Data.Foldable as F
import Type.Quotient as Q

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
            dw3 = compare w._w3 x._w3
        in if dw0 /= EQ then dw0
        else if dw1 /= EQ then dw1
        else if dw2 /= EQ then dw2
        else dw3

instance shift256 :: S.Shift Word256 where
    zshr (Word256 w) i = Word256 {
        _w0: (S.zshr w._w0 i),
        _w1: (S.zshr w._w1 i) + (S.shl w._w0 $ UI.fromInt (64 - UI.toInt i)),
        _w2: (S.zshr w._w2 i) + (S.shl w._w1 $ UI.fromInt (64 - UI.toInt i)),
        _w3: (S.zshr w._w3 i) + (S.shl w._w2 $ UI.fromInt (64 - UI.toInt i)) }
    shr (Word256 w) i = Word256 {
        _w0: (S.zshr w._w0 i) + (S.shl (N.fromBigInt (BI.not (BI.fromInt 0))) $ UI.fromInt (64 - UI.toInt i)),
        _w1: (S.zshr w._w1 i) + (S.shl w._w0 $ UI.fromInt (64 - UI.toInt i)),
        _w2: (S.zshr w._w2 i) + (S.shl w._w1 $ UI.fromInt (64 - UI.toInt i)),
        _w3: (S.zshr w._w3 i) + (S.shl w._w2 $ UI.fromInt (64 - UI.toInt i)) }
    shl (Word256 w) i = Word256 {
        _w0: (S.shl w._w0 i) + (S.zshr w._w1 $ UI.fromInt (64 - UI.toInt i)),
        _w1: (S.shl w._w1 i) + (S.zshr w._w2 $ UI.fromInt (64 - UI.toInt i)),
        _w2: (S.shl w._w2 i) + (S.zshr w._w3 $ UI.fromInt (64 - UI.toInt i)),
        _w3: (S.shl w._w3 i) }
    cshr (Word256 w) i = Word256 {
        _w0: (S.zshr w._w0 i) + (S.shl w._w3 $ UI.fromInt (64 - UI.toInt i)),
        _w1: (S.zshr w._w1 i) + (S.shl w._w0 $ UI.fromInt (64 - UI.toInt i)),
        _w2: (S.zshr w._w2 i) + (S.shl w._w1 $ UI.fromInt (64 - UI.toInt i)),
        _w3: (S.zshr w._w3 i) + (S.shl w._w2 $ UI.fromInt (64 - UI.toInt i)) }
    cshl (Word256 w) i = Word256 {
        _w0: (S.shl w._w0 i) + (S.zshr w._w1 $ UI.fromInt (64 - UI.toInt i)),
        _w1: (S.shl w._w1 i) + (S.zshr w._w2 $ UI.fromInt (64 - UI.toInt i)),
        _w2: (S.shl w._w2 i) + (S.zshr w._w3 $ UI.fromInt (64 - UI.toInt i)),
        _w3: (S.shl w._w3 i) + (S.zshr w._w0 $ UI.fromInt (64 - UI.toInt i)) }

instance eq256 :: E.Eq Word256 where
    eq (Word256 w) (Word256 x) = w._w0 == x._w0 && w._w1 == x._w1 && w._w2 == x._w2 && w._w3 == x._w3

or :: Word256 -> Word256 -> Word256
or (Word256 w) (Word256 x) = Word256 { _w0: w._w0 W..|. x._w0, _w1: w._w1 W..|. x._w1, _w2: w._w2 W..|. x._w2, _w3: w._w3 W..|. x._w3 }

fromByteString :: BS.ByteString -> Word256
fromByteString bs =
    let arr = BS.unpack bs
        foldfn oct w = or (S.shl w (UI.fromInt 8)) (Word256 { _w0: N.fromBigInt (BI.fromInt 0), _w1: N.fromBigInt (BI.fromInt 0), _w2: N.fromBigInt (BI.fromInt 0), _w3: N.fromBigInt (BI.fromInt (Q.runQuotient oct)) })
    in F.foldr foldfn (Word256 { _w0: N.fromBigInt (BI.fromInt 0), _w1: N.fromBigInt (BI.fromInt 0), _w2: N.fromBigInt (BI.fromInt 0), _w3: N.fromBigInt (BI.fromInt 0) }) arr

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
