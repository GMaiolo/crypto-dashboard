import { useSwamp } from "../hooks/useSwamp";
import { useWallet } from "../hooks/useWallet";
import { MainCard } from "../components/MainCard";
import { useTest } from "../hooks/useTest";

const address = "0x824Fa976d081e1716F095c77d7E89F4dB4d588C2";

export default function Home() {
  useTest();

  const {
    status: swampStatus,
    data: swamp,
    balance: swampBalance,
    error: swampError,
  } = useSwamp(address);

  const {
    status: walletStatus,
    data: wallet,
    balance: walletBalance,
    error: walletError,
  } = useWallet(address);

  return (
    <div className="bg-green-100 w-full min-h-screen h-full">
      <div className="container mx-auto p-16">
        <div className="grid gap-12">
          <MainCard
            title="Wallet"
            tokens={wallet}
            balance={walletBalance}
            status={walletStatus}
          />
          <MainCard
            title="Swamp"
            balance={swampBalance}
            farms={swamp?.farms}
            status={swampStatus}
          />
        </div>
      </div>
    </div>
  );
}