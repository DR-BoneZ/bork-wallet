module Crypto.HDTree.Bip39 (
    entropy,
    Entropy
) where

import Prelude
import Control.Monad.Eff.Random.Secure (randomBytes, ENTROPY)
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Exception (EXCEPTION)
import Basement.Types.Word256 as W
import Data.ByteString as BS

type Entropy = W.Word256
type MneumonicBits = W.Word256

--entropy :: Eff () Entropy
entropy = map W.fromByteString (randomBytes 32)

--mneumonicBits :: Entropy -> MneumonicBits
--mneumonicBits e =  e, shiftR 252 <<< (hash SHA256 e) }