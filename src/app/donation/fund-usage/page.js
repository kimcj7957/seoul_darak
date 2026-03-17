import DonationBoardListPage from "@/components/DonationBoardListPage";
import { fundUsagePosts } from "@/lib/donationBoards";

export default function FundUsagePage() {
  return (
    <DonationBoardListPage
      title="기부금 활용내역"
      description="서울다락의 기부금 활용 계획과 집행 공개 자료를 게시판 형태로 안내합니다."
      posts={fundUsagePosts}
    />
  );
}
