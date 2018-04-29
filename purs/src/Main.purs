module Main (main) where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Random.Secure (ENTROPY)
import Control.Monad.Eff.Console (CONSOLE, log)
import Crypto.HDTree.Bip39 (entropy)
import Control.Monad.Eff.Exception (EXCEPTION)

main :: forall e. Eff ( entropy :: ENTROPY, err :: EXCEPTION, console :: CONSOLE | e ) Unit
main = do
  l <- (map show entropy)
  log l
