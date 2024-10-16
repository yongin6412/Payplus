import { Pagination } from '@/components/common/PageNation';
import LoadingSpinner from '@/components/common/Spinner';
import { useApplicants } from '@/hooks/useApplicants';

import styles from './ApplicantList.module.scss';
import { ApplicantRow } from './ApplicantRow';

interface ApplicantTableProps {
  shop_id: string;
  notice_id: string;
}

const ApplicantTable: React.FC<ApplicantTableProps> = ({
  shop_id,
  notice_id,
}) => {
  const {
    applicants,
    currentPage,
    totalPages,
    setCurrentPage,
    handleStatusChange,
    loading,
  } = useApplicants(shop_id, notice_id);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (applicants.length === 0) {
    return (
      <div className={styles.noApplicants}>
        <p>아직 아무도 공고를 신청하지 않았어요.</p>
      </div>
    );
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>신청자</th>
            <th>소개</th>
            <th>전화번호</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <ApplicantRow
              key={applicant.id}
              applicant={applicant}
              onStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ApplicantTable;
