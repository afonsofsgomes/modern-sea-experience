
import React from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  data: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};
