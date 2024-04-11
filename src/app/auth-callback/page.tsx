import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { trpc } from "../_trpc/client";

const Page = async () => {
    const router = useRouter();

    const searchParams= useSearchParams()
    const origin = searchParams.get('origin')



    

    const {data, isLoading} = trpc.test.useQuery()

}

export default Page