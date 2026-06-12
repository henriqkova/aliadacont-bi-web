#!/bin/sh
# download-xlsx.sh — baixa o XLSX do Supabase Storage do Coolify.
#
# Requer env vars: SUPABASE_URL, SUPABASE_SERVICE_KEY.
# O XLSX é depositado em /app/data-source/ (XLSX_BASE_PATH do adapter).

set -e

TS() { date '+%Y-%m-%d %H:%M:%S'; }

if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_SERVICE_KEY" ]; then
  echo "[$(TS)] download-xlsx: SUPABASE_URL ou SUPABASE_SERVICE_KEY não definido — pulando"
  exit 0
fi

SLUG="${BI_SLUG:-aliadacont}"
BUCKET="bi-data"
XLSX_FILE="extrato_financeiroAliadacont.xlsx"
DEST_DIR="/app/data-source"

mkdir -p "$DEST_DIR"

echo "[$(TS)] download-xlsx: baixando ${XLSX_FILE} de ${SUPABASE_URL}/storage/v1/${BUCKET}/${SLUG}/"

HTTP_CODE=$(curl -s -o "${DEST_DIR}/${XLSX_FILE}" -w "%{http_code}" \
  "${SUPABASE_URL}/storage/v1/object/${BUCKET}/${SLUG}/${XLSX_FILE}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}")

if [ "$HTTP_CODE" = "200" ]; then
  SIZE=$(stat -c %s "${DEST_DIR}/${XLSX_FILE}" 2>/dev/null || echo "?")
  echo "[$(TS)] download-xlsx: OK (${SIZE} bytes)"
else
  echo "[$(TS)] download-xlsx: FALHOU (HTTP ${HTTP_CODE})"
  rm -f "${DEST_DIR}/${XLSX_FILE}"
  exit 1
fi
