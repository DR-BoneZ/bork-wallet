module Crypto.HDTree.Bip39 (
    entropy,
    Entropy
) where

import Control.Monad.Eff.Random
import Basement.Types.Word256
import Crypto.Simple

type Entropy = Word256
type MneumonicBits = Word256

entropy :: Entropy
entropy = randomBytes 16

--mneumonicBits :: Entropy -> MneumonicBits
--mneumonicBits e =  e, shiftR 252 <<< (hash SHA256 e) }