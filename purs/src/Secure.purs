module Control.Monad.Eff.Random.Secure
  ( ENTROPY
  , randomBytes
  ) where

import Control.Monad.Eff (Eff, kind Effect)
import Control.Monad.Eff.Exception (EXCEPTION)
import Data.ByteString (ByteString)

foreign import data ENTROPY :: Effect

foreign import randomBytes
  :: ∀ eff
   . Int
  -> Eff (entropy :: ENTROPY, err :: EXCEPTION | eff) ByteString
