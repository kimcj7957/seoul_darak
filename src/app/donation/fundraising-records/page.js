import DonationBoardListPage from "@/components/DonationBoardListPage";
import { fundraisingRecordPosts } from "@/lib/donationBoards";

export default function FundraisingRecordsPage() {
  return (
    <DonationBoardListPage
      title="기부금 모집내역"
      description="서울다락의 기부금 모집 관련 공지와 연도별 공개 자료를 게시판 형태로 안내합니다."
      posts={fundraisingRecordPosts}
    />
  );
}
